{{-- <div class="modal in" id="myModal" role="dialog" style="display: block; padding-right: 17px;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span>
                </button>
                <h3 class="modalheading">Gain Access to More Content</h3>
                <p class="modalmaintext">Subscribe to receive updates on the latest articles and news for CaseWare products.</p>
                <p class="modalsubtext">Your download will start immediately after you subscribe.</p>
                <p class="emailmodalinputlabel">Email:</p>
                <input type="text" id="email">
                <button id="submit" type="button" class="btn btn-primary" onclick="downloadFile();">Subscribe</button><a class="modalnoemail" onclick="downloadFilenoemail()">No thanks. I just want to download the file.</a>
                <div id="emailerrormsg">
                </div>
            </div>
            <div class="modal-footer"><a href="https://casewarecloud.com">Don't have Cloud yet? Click here to learn more.</a>
            </div>
        </div>
    </div>
</div> --}}

<div class="pdf-modal">
    <div class="pdf-modal__wrap">
        <div class="pdf-modal__body">
            <h2 class="">Stay Connected</h2>
            <p class="">Subscribe to receive updates on the latest articles and news for CaseWare products.</p>
            <p class="">Your download will start immediately after you subscribe.</p>
            <div class="pdf-modal__button-wrap">
                <div class="pdf-modal__input-wrap">
                    <input type="text" class="email-sub-for-pdf" placeholder="Enter your email">
                </div>
                <div id="error">Please enter a valid email.</div>
                <button type="button" class="pdf-modal__subscribe-btn">Subscribe</button>
            </div>
            <a href="#" class="pdf-modal__file-download-btn">No thanks, I just want the file.</a>
        </div>
        <div class="pdf-modal__footer">
            <p>Don't have a cloud yet? <a href="https://casewarecloud.com/" target="_blank">Click to learn more</a></p>
        </div>
        <div class="pdf-modal__close">
            {{-- <span class="pdf-modal__close-text">close</span> --}}
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </div>
    </div>
</div>