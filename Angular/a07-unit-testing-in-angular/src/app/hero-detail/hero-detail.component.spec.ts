import { TestBed, ComponentFixture, fakeAsync, tick, flush, async } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { Location } from '@angular/common';
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";


describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivtedRoute, mockHeroService, mockLocation;

  beforeEach(() => {
    mockActivtedRoute = {
      snapshot: { paramMap: { get: () => { return '3'; }}}
    }
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero'])
    mockLocation = jasmine.createSpyObj(['back'])

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        HeroDetailComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivtedRoute },
        { provide: HeroService, useValue: mockHeroService },
        { provide: Location, useValue: mockLocation }
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);

    mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}));
  })

  it('should render hero name in a h2 tag', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  })

  //work with promise and settimeout. Best option to deal with asyncronism
  it('should call updateHero when save is called', fakeAsync(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();

    fixture.componentInstance.save();
    tick(250); // or flush(); doesnt have to put the time

    expect(mockHeroService.updateHero).toHaveBeenCalled();
  }))

  //work with promises
  // it('should call updateHero when save is called', async(() => {
  //   mockHeroService.updateHero.and.returnValue(of({}));
  //   fixture.detectChanges();

  //   fixture.componentInstance.save();

  //   fixture.whenStable().then(() => {
  //     expect(mockHeroService.updateHero).toHaveBeenCalled();
  //   })
  // }))

})