import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { IMetaResponse } from "@/types/api/meta";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMetaResponse>
) {
  const currencies = await prisma.currency.findMany();

  res.status(200).json({ currencies });
}
