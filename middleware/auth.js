export default function (context) {
  // eslint-disable-next-line no-console
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
