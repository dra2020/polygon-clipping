let traces = {}

export const trace = (s) => {
  var n = traces[s]
  n = (n === undefined) ? 1 : n+1
  traces[s] = n
  if (n % 10000 == 0) console.log('trace: ' + s + 'called ' + String(n) + ' times')
}
