import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottlesViewComponent } from 'src/app/bottles-view/bottles-view.component';
import { DetailsViewComponent } from 'src/app/details-view/details-view.component';
import { FilterToggleComponent } from 'src/app/filter-toggle/filter-toggle.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { AscendingComponent } from 'src/app/icons/ascending/ascending.component';
import { BookComponent } from 'src/app/icons/book/book.component';
import { BottleComponent } from 'src/app/icons/bottle/bottle.component';
import { DescendingComponent } from 'src/app/icons/descending/descending.component';
import { ItemCardComponent } from 'src/app/item-card/item-card.component';
import { SortButtonComponent } from 'src/app/sort-button/sort-button.component';
import { SwitchComponent } from 'src/app/switch/switch.component';
import { TabButtonComponent } from 'src/app/tab-button/tab-button.component';
import { ApiService } from 'src/services/api.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        TabButtonComponent,
        SortButtonComponent,
        FilterToggleComponent,
        DetailsViewComponent,
        BottlesViewComponent,
        BookComponent,
        BottleComponent,
        ItemCardComponent,
        SwitchComponent,
        AscendingComponent,
        DescendingComponent,
      ],
      imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
      providers: [ApiService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'flaschenpost'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('flaschenpost');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(
      'Job application:'
    );
    expect(compiled.querySelector('.title span')?.textContent).toContain(
      'Julian Torregrosa'
    );
  });
});
