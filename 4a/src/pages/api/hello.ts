// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

export default async function GetTariffs() {
    let data = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs');
    let tariffs = await data.json()
    return tariffs
}
