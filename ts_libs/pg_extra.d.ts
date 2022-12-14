/// <reference path="./pg.d.ts" />

// @ts-ignore
declare module pg {
  interface QueryArrayResult {
    time: number
  }

  class ClientExt extends Client {
    native: any
    _activeQuery: Query
    activeQuery: Query
    processID: number
  }
}

interface ConnectionOptions {
  host?: string
  port?: string
  database?: string
  user?: string
  password?: string
  query?: string
  auto_connect?: boolean
  url?: string
  type?: string
  sql_query?: string
  tab_name?: string
  ssh_host?: string
  ssh_user?: string
  ssh_pass?: string
  ssh_port?: string
  ssh_key?: string
}

interface HistoryRecord {
  sql: string
  date: Date
  state: string
  time: number
  error?: Error
}

interface PgError extends Error {
  hint: string
  query: string
  client?: pg.ClientExt | string
}