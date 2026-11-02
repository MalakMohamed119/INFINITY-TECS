import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

export interface ColorPreset {
  id: string;
  name: string;
  bodyBg: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
}

@Component({
  selector: 'app-customize-vending',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './customize-vending.component.html',
  styleUrls: ['./customize-vending.component.scss']
})
export class CustomizeVendingComponent implements OnInit {
  private seoService = inject(SeoService);

  // Standard Equipment Built-In on All Infinity Tecs Machines
  readonly isTouchscreenStandard = true; // 32" HD Touchscreen built-in
  readonly isPOSCashlessStandard = true; // POS Card Terminal & App Built-in (NO CASH)

  // Branding Customization
  customBrandName = 'YOUR BRAND LOGO';

  // Custom Color Selection
  selectedColorId = 'forest';
  customHexColor = '#159d94';

  colorPresets: ColorPreset[] = [
    {
      id: 'forest',
      name: 'Forest',
      bodyBg: 'linear-gradient(145deg, #26394d 0%, #40566d 50%, #159d94 100%)',
      accentColor: '#159d94',
      glowColor: 'rgba(63, 98, 84, 0.35)',
      borderColor: '#159d94'
    },
    {
      id: 'black',
      name: 'Stealth Black',
      bodyBg: 'linear-gradient(145deg, #111111 0%, #1A1A1A 50%, #79c9c1 100%)',
      accentColor: '#79c9c1',
      glowColor: 'rgba(129, 149, 138, 0.35)',
      borderColor: '#79c9c1'
    },
    {
      id: 'white',
      name: 'Medical Pure White',
      bodyBg: 'linear-gradient(145deg, #dce4e5 0%, #f7f8f7 50%, #79c9c1 100%)',
      accentColor: '#79c9c1',
      glowColor: 'rgba(129, 149, 138, 0.35)',
      borderColor: '#79c9c1'
    },
    {
      id: 'sage',
      name: 'Soft Sage',
      bodyBg: 'linear-gradient(145deg, #24312b 0%, #355348 50%, #79c9c1 100%)',
      accentColor: '#79c9c1',
      glowColor: 'rgba(129, 149, 138, 0.35)',
      borderColor: '#79c9c1'
    },
    {
      id: 'custom',
      name: 'Custom Brand Color',
      bodyBg: 'linear-gradient(145deg, #26394d 0%, #40566d 100%)',
      accentColor: '#159d94',
      glowColor: 'rgba(63, 98, 84, 0.35)',
      borderColor: '#159d94'
    }
  ];

  // Standard Commercial 6 Shelf Rows Rendered in 3D Preview
  readonly rowCount: number = 6;

  get rowList(): number[] {
    return Array.from({ length: this.rowCount }, (_, i) => i + 1);
  }

  // Optional Hardware Upgrades
  hasElevator = true;
  hasChiller = true;
  hasTelemetry = true;
  hasBrandedWrap = true;

  // Machine Model Size (Single Slim Cabinet vs Double Wide Cabinet)
  machineSize: 'single' | 'double' = 'single';

  get slotList(): number[] {
    return this.machineSize === 'double' ? [1, 2, 3, 4, 5] : [1, 2, 3, 4];
  }

  // Active Tab for Stepper Navigation (1: Model & Branding, 2: Hardware Upgrades, 3: Specification Summary)
  activeTab: number = 1;
  currentPreset: string = 'gym';

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Customize Your Vending Machine | Infinity Tecs',
      description: 'Design and customize touchless commercial vending machines with POS payment terminals, custom vinyl wraps, temperature chillers, and elevator drop systems.'
    });
  }

  setTab(tabNum: number): void {
    if (tabNum >= 1 && tabNum <= 3) {
      this.activeTab = tabNum;
    }
  }

  nextTab(): void {
    if (this.activeTab < 3) {
      this.activeTab++;
    }
  }

  prevTab(): void {
    if (this.activeTab > 1) {
      this.activeTab--;
    }
  }

  get customQueryParams(): Record<string, string | boolean> {
    return {
      customized: 'true',
      brand: this.customBrandName,
      size: this.machineSize,
      color: this.activeColor.name,
      chiller: this.hasChiller,
      elevator: this.hasElevator,
      telemetry: this.hasTelemetry,
      wrap: this.hasBrandedWrap
    };
  }

  selectColor(preset: ColorPreset): void {
    this.selectedColorId = preset.id;
    if (preset.id !== 'custom') {
      this.customHexColor = preset.accentColor;
    }
  }

  get activeColor(): ColorPreset {
    if (this.selectedColorId === 'custom') {
      return {
        id: 'custom',
        name: 'Custom Brand Color',
        bodyBg: `linear-gradient(145deg, #26394d 0%, #40566d 50%, ${this.customHexColor} 100%)`,
        accentColor: this.customHexColor,
        glowColor: `${this.customHexColor}66`,
        borderColor: this.customHexColor
      };
    }
    return this.colorPresets.find(c => c.id === this.selectedColorId) || this.colorPresets[0];
  }

  setPresetIndustry(industry: 'gym' | 'beauty' | 'pharmacy' | 'tech'): void {
    this.currentPreset = industry;
    switch(industry) {
      case 'gym':
        this.customBrandName = "GOLD'S GYM VENDING";
        this.selectedColorId = 'forest';
        this.hasChiller = true;
        this.hasElevator = false;
        break;
      case 'beauty':
        this.customBrandName = 'GLOW BEAUTY LOUNGE';
        this.selectedColorId = 'sage';
        this.hasElevator = true;
        this.hasChiller = true;
        break;
      case 'pharmacy':
        this.customBrandName = '24/7 PHARMACY EXPRESS';
        this.selectedColorId = 'white';
        this.hasChiller = true;
        this.hasElevator = true;
        break;
      case 'tech':
        this.customBrandName = 'TECH GADGET HUB';
        this.selectedColorId = 'black';
        this.hasElevator = false;
        this.hasChiller = false;
        break;
    }
  }

  getItemCategoryForShelf(rIdx: number): string {
    const gymCats = ['protein', 'energy', 'towels'];
    const beautyCats = ['skincare', 'lipsticks', 'perfumes'];
    const pharmCats = ['meds', 'firstaid', 'masks'];
    const techCats = ['tech', 'cables', 'powerbanks'];

    let catList = gymCats;
    if (this.currentPreset === 'beauty') catList = beautyCats;
    if (this.currentPreset === 'pharmacy') catList = pharmCats;
    if (this.currentPreset === 'tech') catList = techCats;

    return catList[rIdx % catList.length];
  }
  
  getRowCode(rIdx: number): string {
    const codes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    return codes[rIdx % codes.length];
  }
}
