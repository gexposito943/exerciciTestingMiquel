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

    it('Ha de tenir 5 inputs', () => {
        const inputs: NodeListOf<HTMLInputElement> = compiled.querySelectorAll('input')!;
        expect(inputs.length).toBe(5);
    });

    it('Ha de tenir 5 labels', () => {
        const labels: NodeListOf<HTMLLabelElement> = compiled.querySelectorAll('label')!;
        expect(labels.length).toBe(5);
    });

    it('Ha de calcular la lletra del DNI', () => {
        const dniNumeros = 12345678;
        const lletraEsperada = 'Z';
        const lletraCalculada = component.calcularLletraDNI(dniNumeros);
        expect(lletraCalculada).toBe(lletraEsperada);
    });

    it('Ha de tenir un botó', () => {
        const button: HTMLButtonElement = compiled.querySelector('button')!;
        expect(button).toBeTruthy();
    });
});
