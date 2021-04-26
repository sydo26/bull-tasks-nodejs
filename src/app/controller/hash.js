import queue from "@lib/queue";

export default {
    async generate(req, res) {

        const hash = Buffer.from(`hash_${Math.random() * 10000}`, 'utf-8').toString('hex').toUpperCase();

        await queue.add('notify_console', {message: "Hash feito"})


        return res.status(200).json({   
            message: "Hash gerado com sucesso!",
            hash
        })
    }
}