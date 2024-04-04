declare global {
    const DEFINE: Readonly<{
        IS_DEV: boolean
        NAME: string
        PRODUCT_NAME: string
        AUTHOR: string
        DESC: string
        VERSION: string
        REPO: {
            url: string
        }
    }>
}

export {}
