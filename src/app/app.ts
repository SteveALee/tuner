import {h1, makeDOMDriver} from '@cycle/dom'
import {run} from '@cycle/xstream-run'
import xs from 'xstream'


function main() {
  const sinks = {
    DOM: xs.periodic(1000).map(i =>
      h1('' + i + ' seconds elapsed')
    )
  }
  return sinks
}

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)

