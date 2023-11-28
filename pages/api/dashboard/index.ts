import type { NextApiRequest, NextApiResponse } from 'next';

const indexHandler = (res: NextApiResponse) => {
    res.status(200).json({
        data: [
            {
                message: 'first todo',
                hours: 30
            },
        ]
    });
}

const createHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body;

    res.status(200).json({
        message: "my body",
        body,
    });
}

const apiRouter = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            indexHandler(res);
            break;
        case "POST":
            createHandler(req, res);
            break;
        default:
            break;
    }
}

export default apiRouter;
