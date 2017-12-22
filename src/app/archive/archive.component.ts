import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
        this.year = +param.get('year');
        this.month = +param.get('month');
    });
  }
  toHome() {
    this.router.navigate(['/']);
  }

}
