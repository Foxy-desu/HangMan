export const popupElements = () => {
    const popup = document.createElement('div');
    const modal = document.createElement('div');
    const newGameBtn = document.createElement('button');
    const messageWrap = document.createElement('section');
    const messageHeading = document.createElement('h2');
    const messageDetails = document.createElement('p');

    return (
        {
            popup,
            modal,
            newGameBtn,
            messageWrap,
            messageHeading,
            messageDetails
        }
    )
}