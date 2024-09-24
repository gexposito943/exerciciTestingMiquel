import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariComponent } from './formulari.component';

describe('FormulariComponent', () => {
    let component: FormulariComponent;
    let fixture: ComponentFixture<FormulariComponent>;
    let compiled: HTMLElement;

  

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormulariComponent]
        })
        
        .compileComponents();

        fixture = TestBed.createComponent(FormulariComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled=fixture.nativeElement as HTMLElement;

    });

    it('Hauriem de tenir 5 inputs', () => {
        const inputs: NodeListOf<HTMLInputElement> | null= compiled.querySelectorAll('input');
        expect(inputs.length).toBe(5);
    });

    it('Hauriem de tenir 5 labels', () => {
        const labels: NodeListOf<HTMLInputElement> | null= compiled.querySelectorAll('labels');
        expect(labels.length).toBe(5);
    });

});
