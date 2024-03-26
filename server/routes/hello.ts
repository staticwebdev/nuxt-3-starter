const now = new Date();

export default defineEventHandler(() => "<h1>Server route</h1><span><b>Server started at:</b></span> " + now)
