import type { NextApiRequest, NextApiResponse } from 'next';

const showHandler = (id: string | string[] | undefined, res: NextApiResponse) => {
    res.status(200).json({
        message: "given show id is",
        id,
    });
}

const updateHandler = (id: string | string[] | undefined, res: NextApiResponse) => {
    res.status(200).json({
        message: "given put id is",
        id,
    });
}

const deleteHandler = (id: string | string[] | undefined, res: NextApiResponse) => {
    res.status(200).json({
        message: "given delet id is",
        id,
    });
}

const noRouteFoundHandler = (res: NextApiResponse) => {
    res.status(400).json({
        message: 'no route found, sorry'
    })
}

const apiRouter = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    switch (req.method) {
        case "GET":
            showHandler(id, res);
            break;
        case "PUT":
            updateHandler(id, res);
            break;
        case "DELETE":
            deleteHandler(id, res);
            break;
        default:
            noRouteFoundHandler(res);
            break;
    }
};

export default apiRouter;