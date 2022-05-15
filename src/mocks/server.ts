import { rest } from 'msw';
import { setupServer } from 'msw/node'

export const worker = setupServer(
    rest.post('https://formsubmit.co/ajax/boiuattechhub@gmail.com', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: "success"
            })
        )
    })
);
