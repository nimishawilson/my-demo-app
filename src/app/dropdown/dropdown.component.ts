import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  toppings = new FormControl('');
  selectedOption: string;
  previousOption: string;

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  t: string;
  
  constructor(private dialog: MatDialog) {}
  
  ngOnInit(): void {
  }

  openConfirmationModal(event: any): void {

    this.previousOption = this.selectedOption;
    this.selectedOption = event.value;
    // this.t = this.selectedOption;

    console.log('Selected option:', this.selectedOption);
    console.log('Previous option:', this.previousOption);

    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '300px',
      data: 'Are you sure you want to make the selection?',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.t = this.selectedOption;
        console.log('Clicked yes');
      } else {
        this.t = this.previousOption;
        console.log('Clicked no');
      }
    });
  }

}
