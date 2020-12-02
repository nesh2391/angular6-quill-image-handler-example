import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  quillEditorRef;
  maxUploadFileSize = 1000000;
  
  constructor() {
    console.log('constructor');
  }

  ngOnInit() { 
    console.log('ngOnInit');
  }

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    console.log(this.quillEditorRef)
    const toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
  }

  // imageHandler = (image, callback) => {
  //   const input = <HTMLInputElement> document.getElementById('fileInputField');
  //   document.getElementById('fileInputField').onchange = () => {
  //     let file: File;
  //     file = input.files[0];
  //     // file type is only image.
  //     if (/^image\//.test(file.type)) {
  //       if (file.size > this.maxUploadFileSize) {
  //         alert('Image needs to be less than 1MB');
  //       } else {
  //         const reader  = new FileReader();
  //         reader.onload = () =>  {
  //           const range = this.quillEditorRef.getSelection();
  //           const img = '<img src="' + reader.result + '" />';
  //           this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
  //         };
  //         reader.readAsDataURL(file);
  //       }
  //     } else {
  //         alert('You could only upload images.');
  //     }
  //   };

  //   input.click();
  // }

  imageHandler = (image, callback) => {
    const range = this.quillEditorRef.getSelection();
    const img = '<a href="https://image.flaticon.com/icons/png/128/126/126477.png" data-lightbox="image-1" data-title="My caption"> <div> <img src="https://image.flaticon.com/icons/png/128/126/126477.png" height="50"/> </div> </a>';
    this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
  }

}
