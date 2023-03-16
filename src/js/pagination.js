export const ulTag = document.querySelector('.pagination-list');

export function pagination(totalPages, page) {
    let liTag = '';
    let thirdPagesAnd = totalPages - 2;
    let thirdPages = page - 2;
    let curentPage = page;

    if (totalPages > 6) {
        if (page < 3) {
            thirdPages = 1;
            page = 3;
        }
        if (page > totalPages - 3) {
            page = totalPages - 3;
            thirdPages = page - 2;
        }
        for (let i = thirdPages; i <= page; i++) {
            if (i === curentPage) {
                liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
            } else {
                liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
            }
        }
        liTag += `<li class="pagination-item dot-item"><span>...</span></li>`;
        for (let i = thirdPagesAnd; i <= totalPages; i++) {
            if (i === curentPage) {
                liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
            } else {
                liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
            }
        }
    } else {
        for (let i = page; i <= totalPages; i++) {
            if (i = page) {
                liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
            } else {
                liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
            }
        }
    }
    ulTag.innerHTML = liTag;
    
}