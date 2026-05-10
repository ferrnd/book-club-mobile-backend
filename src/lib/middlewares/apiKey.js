export const apiKey = (req, res, next) => {
    const key = req.headers['x-api-key'];

    if (!key || key !== process.env.API_KEY && key !== process.env.ADMIN_KEY) {
        return res.status(401).json({ error: 'API Key inválida ou ausente.' });
    }

    next();
};

export const admKey = (req, res, next) => {
    const key = req.headers['x-api-key'];

    if (!key || key !== process.env.ADMIN_KEY) {
        return res.status(401).json({ error: 'Admin Key inválida ou ausente.' });
    }

    next();
};