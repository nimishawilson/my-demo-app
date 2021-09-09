import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-copy-clipboard',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.scss']
})
export class CopyClipboardComponent implements OnInit {
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  isCopied = false;
  constructor(private clipboardService: ClipboardService) { }

  ngOnInit(): void {
  }

  copyContent() {
    this.clipboardService.copyFromContent(this.text);
    this.isCopied = true;
  }

}
