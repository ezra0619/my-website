export interface YoutubeSearchResponseModel{
    kind: string,
    etag: string,
    nextPageToken: string,
    prevPageToken: string,
    regionCode: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: {
        etag: string,
        id: {
            kind: string,
            videoId: string
        },
        kind: string,
        snippet: {
            channelId: string,
            channelTitle: string,
            description: string,
            liveBroadcastContent: string,
            publishTime: string,
            publishedAt: string,
            thumbnails: {
                default: {
                    url: string,
                    width: number,
                    height: number,
                },
                hight: {
                    url: string,
                    width: number,
                    height: number,
                },
                medium: {
                    url: string,
                    width: number,
                    height: number,
                }
            },
            title: string
        }
    }[]
}