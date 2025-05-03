import { NgModule } from "@angular/core";
import { NzIconModule } from "ng-zorro-antd/icon";
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzAffixModule } from "ng-zorro-antd/affix";
import { NzAnchorModule } from "ng-zorro-antd/anchor";
import { NzAutocompleteModule } from "ng-zorro-antd/auto-complete";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzCalendarModule } from "ng-zorro-antd/calendar";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { NzCascaderModule } from "ng-zorro-antd/cascader";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzCommentModule } from "ng-zorro-antd/comment";
import { NzNoAnimationModule } from "ng-zorro-antd/core/no-animation";
import { NzTransButtonModule } from "ng-zorro-antd/core/trans-button";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { NzWaveModule } from "ng-zorro-antd/core/wave";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzImageModule } from "ng-zorro-antd/image";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzNotificationModule } from "ng-zorro-antd/notification";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzListModule } from "ng-zorro-antd/list";
import { NzMentionModule } from "ng-zorro-antd/mention";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzI18nModule } from "ng-zorro-antd/i18n";
import { NzMessageModule } from "ng-zorro-antd/message";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzTimelineModule } from "ng-zorro-antd/timeline";
import { NzPipesModule } from "ng-zorro-antd/pipes";
import { NzResizableModule } from "ng-zorro-antd/resizable";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzTreeModule } from "ng-zorro-antd/tree";
import { NzTreeSelectModule } from "ng-zorro-antd/tree-select";
import { NzTransferModule } from "ng-zorro-antd/transfer";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzUploadModule } from "ng-zorro-antd/upload";

const andDesignIcons = Object.values(AllIcons);

@NgModule({
    imports: [
        NzIconModule.forChild(andDesignIcons),
    ],
    exports: [
        NzIconModule,
        NzAffixModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAlertModule,
        NzAvatarModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzCollapseModule,
        NzCommentModule,
        NzNoAnimationModule,
        NzTransButtonModule,
        NzWaveModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzImageModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNotificationModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTreeModule,
        NzTreeSelectModule,
        NzTransferModule,
        NzTypographyModule,
        NzUploadModule,
        NzPipesModule,
        NzResizableModule
    ]
    })

export class NgZorroAntdModule {}