import { success, notFound } from '../../services/response/';
import { Refill } from '.';
import RefillService from './service.js';
import moment from 'moment-timezone';
import { timezone } from '../../config';

export const create = ({ bodymen: { body } }, res, next) =>
  Refill.create(body)
    .then((refill) => refill.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Refill.find(query, select, cursor)
    .then((refills) => refills.map((refill) => refill.view()))
    .then((refillsUtc) => refillsUtc.map((refill) => ({...refill, createdAt: moment(refill.createdAt).tz(timezone).format("YYYY-MM-DD HH:mm:ss")})))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Refill.findById(params.id)
    .then(notFound(res))
    .then((refill) => refill ? refill.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Refill.findById(params.id)
    .then(notFound(res))
    .then((refill) => refill ? Object.assign(refill, body).save() : null)
    .then((refill) => refill ? refill.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Refill.findById(params.id)
    .then(notFound(res))
    .then((refill) => refill ? refill.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const currentWeekRefills = ({ params }, res, next) => {
  const refillCount = {};
    
  for(let i=1; i<=7; i++){
    // weekday(i%6) because we want the dates starting from monday to sunday and sunday's index is 0.
    const date = moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(i%7).format('YYYY-MM-DD');
    refillCount[date] = 0;
  }

  Refill.find({ createdAt: {$gte: moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(1).utc()}})
    .then((refills) => refills.map((refill) => refill.view()))
    .then((refillsUtc) => refillsUtc.map((refill) => ({...refill, createdAt: moment(refill.createdAt).tz(timezone).format("YYYY-MM-DD")})))
    .then((refills) => refills.reduce((acc, val) => acc[val.createdAt]++, refillCount))
    .then(success(res))
    .catch(next)




  
  // Refill.mapReduce({
  //   map: function(){ emit(this.createdAt.toISOString().substr(0,10), this.createdAt.toISOString()) },
  //   reduce: (key, values) => values ? values.length : 0,
  //   query: { createdAt: {$gte: moment().tz(timezone).seconds(0).hours(0).minutes(0).weekday(1).utc()}},
  //   out: { "inline": 1 }
  // }, function(err, results, stats) {
    
  //   if(err) console.log(err);
  //   results.map
  //   forEach((date) =>{
  //     refillCount[date._id] = date.value;
  //   });
  //   success(res)(refillCount);
  // });
  //success(res)(RefillService.getCurrentWeekRefills())
};