import { Component, OnInit ,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../../../task'
import { ProjetService } from '../../../projet.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  tasks: Task[]
  editTask: Task
  p: number=1;
  search: string;
  form: FormGroup;
  UserId:number = JSON.parse(localStorage.getItem('user')).userId;
  constructor(private projetService: ProjetService, private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('user')).userId)
    this.getTasksuser(this.UserId)
    this.form = this.formBuilder.group({
      product: [null, [Validators.required]],
      description: [null, [Validators.required]],
      categories: [null, [Validators.required]],
      product_price: [null, [Validators.required]],
      subCategory: [null, [Validators.required]],
      baseColor: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      file: [null, [Validators.required]]

    })
  }
  getTasksuser (UserId): void {
    this.projetService.getTasksuser(UserId).subscribe(tasks => (this.tasks = tasks))
  }
  getTasks (): void {
    this.projetService.getTasks().subscribe(tasks => (this.tasks = tasks))
  }
  add (Product_name: string,description:string,Categories:string,Product_price:number,subCategory:string,gender:string,baseColor:string,Product_img:string): void {
    this.editTask = undefined
    Product_name = Product_name.trim()
    this.projetService
    .getTasks()
    .subscribe((data: Task[]) => {
      this.tasks = data;
    const newTask: Task = { produitId: this.tasks.length + 1 , Product_name:Product_name, description:description , Categories:Categories , Product_price:Product_price , subCategory:subCategory , gender:gender , baseColor:baseColor , Product_img:Product_img.replace("C:\\fakepath\\", "") , vendeurId:this.UserId } as Task
    this.projetService.addTask(newTask).subscribe(() => this.getTasks())
    })
  }

  delete (task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task)
    this.projetService
        .deleteTask(task.produitId)
        .subscribe(() => console.log('Task Deleted'))
  }

  edit (task) {
    this.editTask = task
  }

  update () {
    if (this.editTask) {
        this.projetService.updateTask(this.editTask).subscribe(() => {
            this.getTasks()
        })
        this.editTask = undefined
    }
  }
  
  @ViewChild('fileInput') fileInput;
  uploadFile() {
    const files: FileList = this.fileInput.nativeElement.files;
    if (files.length === 0) {
      return;
    };

    this.projetService.parseTable(files).subscribe((data: any) => {
      console.log(data);
    });

}
}