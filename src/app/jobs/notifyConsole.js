export default {
    key: 'notify_console',
    options: {
        limiter: {
            max: 1,
            duration: 10000
        }
    },
    async handle({ data }) {
        console.log("[NOTIFY]", data.message)
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }
}