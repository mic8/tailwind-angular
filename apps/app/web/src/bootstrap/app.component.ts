import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DialogService } from '@progress/kendo-angular-dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    public constructor(private swUpdate: SwUpdate, private dialogService: DialogService, private cdRef: ChangeDetectorRef) {}

    public ngAfterViewInit(): void {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((event: any) => {
                this.restartPrompt();
            });

            this.swUpdate.checkForUpdate();
        }
    }

    private restartPrompt(): void {
        const dialog = this.dialogService.open({
            title: 'Update Aplikasi',
            content: 'Update terbaru aplikasi tersedia. Terapkan sekarang?',
            actions: [
                { text: 'Tidak', value: false },
                { text: 'Ya', value: true, primary: true },
            ],
            width: 450,
            height: 200,
            minWidth: 250,
        });

        dialog.result.subscribe((result: any) => {
            if (result['value']) {
                this.swUpdate.activateUpdate().then(() => {
                    window.location.reload();
                });
            } else {
                setTimeout(() => {
                    this.restartPrompt();
                }, 5 * 60 * 1000);
            }
        });

        this.cdRef.markForCheck();
    }
}
