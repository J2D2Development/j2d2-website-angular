import { Injectable } from '@angular/core';

@Injectable()
export class CasesService {
    previewBarState: string = 'full';

    updatePreviewBarState(state): void {
        this.previewBarState = state;
    }
}