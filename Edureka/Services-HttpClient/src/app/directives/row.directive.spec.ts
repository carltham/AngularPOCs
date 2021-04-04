import { ElementRef, Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { rowDirective } from "./row.directive";
//import { createCustomElement } from '@angular/elements';

@Component({
  template: `<div rowDirective>Testing, testing ... 123</div>
    <div rowDirective>Testing, testing ... 123</div>`,
})
class TestHoverFocusComponent {}

describe("Directive: rowDirective", () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let element0: DebugElement;
  let element1: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, rowDirective],
    });
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;

    // all elements with an attached HighlightDirective
    let directiveElements: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(rowDirective)
    );
    element0 = directiveElements[0];
    element1 = directiveElements[1];
  });

  it("testing html, should color 1st <div> background only when hovering over it", () => {
    let bgColor0 = element0.nativeElement.style.backgroundColor;
    let bgColor1 = element1.nativeElement.style.backgroundColor;
    expect(bgColor0).toBe("");
    expect(bgColor1).toBe("");

    element0.triggerEventHandler("mouseenter", null);
    bgColor0 = element0.nativeElement.style.backgroundColor;
    bgColor1 = element1.nativeElement.style.backgroundColor;
    expect(bgColor0).toBe(hexToRGB("#ffa"));
    expect(bgColor1).toBe("");

    element0.triggerEventHandler("mouseleave", null);
    bgColor0 = element0.nativeElement.style.backgroundColor;
    bgColor1 = element1.nativeElement.style.backgroundColor;
    expect(bgColor0).toBe("");
    expect(bgColor1).toBe("");
  });

  it("testing directive, should change oldBackgroundColor only when hovering over it", () => {
    let directive0 = element0.injector.get(rowDirective) as rowDirective;
    let directive1 = element1.injector.get(rowDirective) as rowDirective;
    expect(directive0.oldBackgroundColor).toBe("");
    expect(directive1.oldBackgroundColor).toBe("");

    element0.triggerEventHandler("mouseenter", null);
    expect(directive0.oldBackgroundColor).toBe("");
    expect(directive1.oldBackgroundColor).toBe("");

    element0.triggerEventHandler("mouseleave", null);
    expect(directive0.oldBackgroundColor).toBe(hexToRGB("#ffa"));
    expect(directive1.oldBackgroundColor).toBe("");
  });
});

function RGBToHex(rgb: any) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}
function hexToRGB(h: string) {
  let r: any = 0,
    g: any = 0,
    b: any = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + ", " + +g + ", " + +b + ")";
}
