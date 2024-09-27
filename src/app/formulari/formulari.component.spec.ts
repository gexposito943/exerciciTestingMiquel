import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariComponent } from './formulari.component';
import { input } from '@angular/core';

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

    it('Ha de tenir 10 inputs', () => {
        const inputs = getHtmlElements('input');
        expect(inputs.length).toBe(10);
    });

    it('Ha de tenir 10 labels', () => {
        const labels= getHtmlElements('label');
        expect(labels.length).toBe(10);
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

    it('Ha de tenir 5 checkboxes', () => {
        const checkboxes = getHtmlElements('input[type="checkbox"]');
        expect(checkboxes.length).toBe(5);
    });

    const getHtmlElements = (elementType: string) => {
        const logic: NodeListOf<HTMLElement> = compiled.querySelectorAll(`${elementType}`)!
        return logic;
    }
});
