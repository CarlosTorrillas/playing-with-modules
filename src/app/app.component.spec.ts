import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { PageOneModule } from '../modules/page-one/page-one.module';
import { PageTwoModule } from '../modules/page-two/page-two.module';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

/**********************************
 * WORK IN PROGRESS
 * Test with different modules (Mock modules???, use same modules???)
 */
xdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PageOneModule,
        PageTwoModule,
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should navigate through modules', async(() => {
    expect(nativeElement.querySelector('[data-qa="appTitle"]').textContent).toBe('PLAYING WITH MODULES');
    expect(nativeElement.querySelector('[data-qa="pageOne"]').textContent).toBeFalsy();
    expect(nativeElement.querySelector('[data-qa="pageTwo"]').textContent).toBeFalsy();
    expect(nativeElement.querySelector('[data-qa="pageThree"]').textContent).toBeFalsy();
    expect(nativeElement.querySelector('[data-qa="pageFour"]').textContent).toBeFalsy();
    nativeElement.querySelector('[data-qa="continue"]').click();
    expect(nativeElement.querySelector('[data-qa="pageOne"]').textContent).toBe('PAGE ONE');
    nativeElement.querySelector('[data-qa="continue"]').click();
    expect(nativeElement.querySelector('[data-qa="pageTwo"]').textContent).toBe('PAGE TWO');
    nativeElement.querySelector('[data-qa="continue"]').click();
    expect(nativeElement.querySelector('[data-qa="pageThree"]').textContent).toBe('PAGE THREE');
    nativeElement.querySelector('[data-qa="continue"]').click();
    expect(nativeElement.querySelector('[data-qa="pageFour"]').textContent).toBe('PAGE FOUR');
    nativeElement.querySelector('[data-qa="back"]').click();
    expect(nativeElement.querySelector('[data-qa="pageThree"]').textContent).toBe('PAGE THREE');
    nativeElement.querySelector('[data-qa="back"]').click();
    expect(nativeElement.querySelector('[data-qa="pageTwo"]').textContent).toBe('PAGE TWO');
  }));
});
