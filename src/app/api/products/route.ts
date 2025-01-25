import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.resolve("./", "produtos.json") // Caminho do arquivo
    const data = fs.readFileSync(filePath, "utf-8")
    const products = JSON.parse(data).products

    return new Response(JSON.stringify(products), {
      status: 200,
    })
  } catch (error) {
    return new Response("Erro ao ler o arquivo", { status: 500 })
  }
}