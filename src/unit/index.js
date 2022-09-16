
export const getDate = (seccons, options) =>  new Date(seccons * 1000).toLocaleString('en-US', {...options})
