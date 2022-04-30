import { DATA_ATTR_ID, DATA_TRANSFER_KEY } from '@/Constants'

let counter = 0

export function registerDragListeners(): void {
    // This must be called when DOM has finished rendering otherwise this will not find anything
    // This function is using $ instead of using findDelayedElement because it must be synchronous to be used by MutationObserver
    const videoRows = $('#contents.ytd-playlist-video-list-renderer > ytd-playlist-video-renderer')

    for (const videoRow of videoRows) {
        const elementId = (counter++).toString()

        $(videoRow).addClass('draggable-video')
        $(videoRow).attr('draggable', 'true')
        $(videoRow).attr(DATA_ATTR_ID, elementId)

        $(videoRow).off('dragstart')
        $(videoRow).on('dragstart', (event) => {
            event.originalEvent?.dataTransfer?.setData(DATA_TRANSFER_KEY, elementId)
            $(videoRow).addClass('dragging')
        })

        $(videoRow).off('dragend')
        $(videoRow).on('dragend', () => {
            $(videoRow).removeClass('dragging')
        })
    }
}
