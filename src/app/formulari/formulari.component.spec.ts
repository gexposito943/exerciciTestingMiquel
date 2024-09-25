import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariComponent } from './formulari.component';

describe('FormulariComponent', () => {
    let component: FormulariComponent;
    let fixture: ComponentFixture<FormulariComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormulariComponent] 
        })
        
        .compileComponents();

        fixture = TestBed.createComponent(FormulariComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled=fixture.nativeElement as HTMLElement;

    });

    it('Hauriem de tenir 5 inputs', () => {
        const inputs: NodeListOf<HTMLInputElement> = compiled.querySelectorAll('input')!;
        expect(inputs.length).toBe(5);
    });

    it('Hauriem de tenir 5 labels', () => {
        const labels: NodeListOf<HTMLLabelElement> = compiled.querySelectorAll('label')!;
        expect(labels.length).toBe(5);
    });

    it('Calcula la lletra del DNI', () => {
        const dniNumeros = 12345678;
        const lletraesparada = 'Z';
        const lletraCalculada = component.calcularLletraDNI(dniNumeros);
        expect(lletraCalculada).toBe(lletraesparada);
    });
});
