let traces = {}

export const trace = (s) => {
  var n = traces[s]
  n = (n === undefined) ? 1 : n+1
  traces[s] = n
}

export const dumptraces = () => {
    for (var s in traces) if (traces.hasOwnProperty(s))
      console.log('trace: ' + s + ' called ' + String(traces[s]) + ' times');
    traces = {}
  }
