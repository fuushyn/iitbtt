import domtoimage from 'dom-to-image';

domtoimage.toBlob(document.getElementsByClassName('timetable'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
