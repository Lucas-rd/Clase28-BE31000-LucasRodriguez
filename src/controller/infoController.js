import { args } from "../server.js"

const infoController = async(req, res) => {

    const info = {
      puerto: args.port,
      plataforma: process.platform,
      versionNode: process.version,
      memoriaTotalReservada: process.memoryUsage().rss,
      pathExec: process.execPath,
      processId: process.pid,
      capetaProyecto: process.cwd()
      }

    res.render('plantillaInfo.ejs', { info })
}

export { infoController }