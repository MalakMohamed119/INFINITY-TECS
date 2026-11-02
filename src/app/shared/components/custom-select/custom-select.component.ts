import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  forwardRef, 
  ElementRef, 
  HostListener 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  value: string;
  label: string;
  subLabel?: string;
}

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ],
  template: `
    <div class="custom-select-wrapper" [class.open]="isOpen" [class.disabled]="disabled">
      <!-- Trigger Button -->
      <div 
        class="select-trigger" 
        (click)="toggleOpen()" 
        tabindex="0"
        (keydown.space)="$event.preventDefault(); toggleOpen()"
        (keydown.enter)="$event.preventDefault(); toggleOpen()"
        (keydown.escape)="isOpen = false"
      >
        <span class="selected-label" [class.placeholder]="!selectedOption">
          {{ selectedOption ? selectedOption.label : (placeholder || 'Select an option...') }}
        </span>

        <span class="chevron-icon" [class.rotated]="isOpen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      <!-- Floating Curved Dropdown Menu -->
      <div class="floating-dropdown-menu" *ngIf="isOpen">
        <ul class="options-list">
          <li 
            *ngFor="let opt of options" 
            class="option-item"
            [class.selected]="value === opt.value"
            (click)="selectOption(opt)"
          >
            <div class="option-content">
              <span class="option-label">{{ opt.label }}</span>
              <span class="option-sub" *ngIf="opt.subLabel">{{ opt.subLabel }}</span>
            </div>

            <svg *ngIf="value === opt.value" class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .custom-select-wrapper {
      position: relative;
      width: 100%;
      user-select: none;

      &.disabled {
        opacity: 0.6;
        pointer-events: none;
      }
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      padding: 12px 18px;
      background: #FFFFFF;
      border: 1.5px solid rgba(38, 57, 77, 0.15);
      border-radius: 14px;
      box-shadow: 0 4px 14px rgba(38, 57, 77, 0.04);
      cursor: pointer;
      outline: none;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

      &:hover {
        border-color: #258f87;
        box-shadow: 0 6px 20px rgba(63, 98, 84, 0.14);
        transform: translateY(-1px);
      }

      .open & {
        border-color: #258f87;
        box-shadow: 0 0 0 4px rgba(63, 98, 84, 0.2), 0 8px 24px rgba(63, 98, 84, 0.15);
      }
    }

    .selected-label {
      font-family: var(--font-family-body, inherit);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-primary-dark, #26394d);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &.placeholder {
        color: var(--color-text-muted, #707873);
        font-weight: 500;
      }
    }

    .chevron-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #258f87;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      flex-shrink: 0;

      &.rotated {
        transform: rotate(180deg);
      }
    }

    /* Modern Floating Curved Light Gray Menu */
    .floating-dropdown-menu {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      z-index: 1000;
      background: #f7f8f7;
      border: 1.5px solid #dce4e5;
      border-radius: 18px;
      padding: 8px;
      box-shadow: 0 14px 36px rgba(42, 41, 46, 0.16), 0 4px 14px rgba(63, 98, 84, 0.08);
      overflow: hidden;
      animation: menuFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .options-list {
      list-style: none;
      padding: 0;
      margin: 0;
      max-height: 250px;
      overflow-y: auto;
      overflow-x: hidden;

      /* Custom scrollbar inside menu */
      &::-webkit-scrollbar {
        width: 6px;
        height: 0px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--color-accent-primary, #159d94);
        border-radius: 10px;
      }
    }

    .option-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #2e3430;
      margin-bottom: 2px;
      box-sizing: border-box;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        background: #eef2f1;
        color: #258f87;
      }

      &.selected {
        background: #eef2f1;
        color: #35b5aa;
        font-weight: 700;
        border: 1px solid rgba(85, 119, 102, 0.3);
      }
    }

    .option-content {
      display: flex;
      flex-direction: column;
    }

    .option-label {
      font-size: 0.92rem;
      font-weight: 600;
      color: #2e3430;
    }

    .option-sub {
      font-size: 0.76rem;
      color: #35b5aa;
      font-weight: 600;
      margin-top: 2px;
    }

    .check-icon {
      stroke: #35b5aa;
      flex-shrink: 0;
    }

    @keyframes menuFadeIn {
      from {
        opacity: 0;
        transform: translateY(-8px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Output() selectionChange = new EventEmitter<SelectOption>();

  isOpen: boolean = false;
  value: any = null;

  private onChange: (val: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private elementRef: ElementRef) {}

  get selectedOption(): SelectOption | undefined {
    return this.options.find(o => o.value === this.value);
  }

  toggleOpen(): void {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.onTouched();
    }
  }

  selectOption(opt: SelectOption): void {
    this.value = opt.value;
    this.onChange(this.value);
    this.selectionChange.emit(opt);
    this.isOpen = false;
  }

  // ControlValueAccessor implementation
  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
