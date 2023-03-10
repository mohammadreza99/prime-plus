import {Type} from '@angular/core';
import {WelcomeComponent} from '@modules/main/pages/showcase/components/welcome/welcome.component';
import {EmojiComponent} from '@modules/main/pages/showcase/components/emoji/emoji.component';
import {BlocksComponent} from '@modules/main/pages/showcase/components/blocks/blocks.component';
import {SpaceComponent} from '@modules/main/pages/showcase/components/space/space.component';
import {BubblesComponent} from '@modules/main/pages/showcase/components/bubbles/bubbles.component';
import {AutoCompletePage} from '@modules/main/pages/showcase/pages/auto-complete/auto-complete.page';
import {ButtonPage} from '@modules/main/pages/showcase/pages/button/button.page';
import {CascadeSelectPage} from '@modules/main/pages/showcase/pages/cascade-select/cascade-select.page';
import {ChipsPage} from '@modules/main/pages/showcase/pages/chips/chips.page';
import {ColorPickerPage} from '@modules/main/pages/showcase/pages/color-picker/color-picker.page';
import {DropdownPage} from '@modules/main/pages/showcase/pages/dropdown/dropdown.page';
import {EditorPage} from '@modules/main/pages/showcase/pages/editor/editor.page';
import {FilePickerPage} from '@modules/main/pages/showcase/pages/file-picker/file-picker.page';
import {FilePicker2Page} from '@modules/main/pages/showcase/pages/file-picker2/file-picker2.page';
import {InputMaskPage} from '@modules/main/pages/showcase/pages/input-mask/input-mask.page';
import {InputNumberPage} from '@modules/main/pages/showcase/pages/input-number/input-number.page';
import {InputPasswordPage} from '@modules/main/pages/showcase/pages/input-password/input-password.page';
import {InputTextPage} from '@modules/main/pages/showcase/pages/input-text/input-text.page';
import {InputTextareaPage} from '@modules/main/pages/showcase/pages/input-textarea/input-textarea.page';
import {ListboxPage} from '@modules/main/pages/showcase/pages/listbox/listbox.page';
import {MapPage} from '@modules/main/pages/showcase/pages/map/map.page';
import {MultiCheckboxPage} from '@modules/main/pages/showcase/pages/multi-checkbox/multi-checkbox.page';
import {MultiSelectPage} from '@modules/main/pages/showcase/pages/multi-select/multi-select.page';
import {RadioPage} from '@modules/main/pages/showcase/pages/radio/radio.page';
import {RatingPage} from '@modules/main/pages/showcase/pages/rating/rating.page';
import {SelectButtonPage} from '@modules/main/pages/showcase/pages/select-button/select-button.page';
import {CheckboxPage} from '@modules/main/pages/showcase/pages/checkbox/checkbox.page';
import {SliderPage} from '@modules/main/pages/showcase/pages/slider/slider.page';
import {SplitButtonPage} from '@modules/main/pages/showcase/pages/split-button/split-button.page';
import {SwitchPage} from '@modules/main/pages/showcase/pages/switch/switch.page';
import {TablePage} from '@modules/main/pages/showcase/pages/table/table.page';
import {ToggleButtonPage} from '@modules/main/pages/showcase/pages/toggle-button/toggle-button.page';
import {TreePage} from '@modules/main/pages/showcase/pages/tree/tree.page';
import {ImageSliderPage} from '@modules/main/pages/showcase/pages/image-slider/image-slider.page';
import {DashboardPage} from '@modules/main/pages/showcase/pages/dashboard/dashboard.page';
import {
  PreviewOptionsComponent
} from '@modules/main/pages/showcase/components/preview-options/preview-options.component';
import {KnobPage} from '@modules/main/pages/showcase/pages/knob/knob.page';
import {TreeSelectPage} from '@modules/main/pages/showcase/pages/tree-select/tree-select.page';
import {
  DynamicDialogSampleComponent
} from '@modules/main/pages/showcase/components/dynamic-dialog-sample/dynamic-dialog-sample.component';
import {UtilsPage} from "@modules/main/pages/showcase/pages/utils/utils.page";
import {SmokeComponent} from "@modules/main/pages/showcase/components/smoke/smoke.component";
import {TriStateCheckboxPage} from "@modules/main/pages/showcase/pages/tri-state-checkbox/tri-state-checkbox.page";
import {JalaliDatepickerPage} from "@modules/main/pages/showcase/pages/jalali-datepicker/jalali-datepicker.page";
import {
  GregorianDatepickerPage
} from "@modules/main/pages/showcase/pages/gregorian-datepicker/gregorian-datepicker.page";
import {EmptyPage} from "@modules/main/pages/showcase/pages/empty/empty.page";
import {StatusPage} from "@modules/main/pages/showcase/pages/status/status.page";
import {DualLabelSwitchPage} from "@modules/main/pages/showcase/pages/dual-label-switch/dual-label-switch.page";
import {BottomSheetPage} from "@modules/main/pages/showcase/pages/bottom-sheet/bottom-sheet.page";
import {ImagePage} from "@modules/main/pages/showcase/pages/image/image.page";
import {ConfirmDialogPage} from "@modules/main/pages/showcase/pages/confirm-dialog/confirm-dialog.page";
import {DialogFormPage} from "@modules/main/pages/showcase/pages/dialog-form/dialog-form.page";
import {MessagePage} from "@modules/main/pages/showcase/pages/message/message.page";
import {ToastPage} from "@modules/main/pages/showcase/pages/toast/toast.page";
import {ConfirmPopupPage} from "@modules/main/pages/showcase/pages/confirm-popup/confirm-popup.page";
import {DialogPage} from "@modules/main/pages/showcase/pages/dialog/dialog.page";
import {LoadingContainerPage} from "@modules/main/pages/showcase/pages/loading-container/loading-container.page";
import {InfiniteScrollPage} from "@modules/main/pages/showcase/pages/infinite-scroll/infinite-scroll.page";
import {AnimateOnScrollPage} from "@modules/main/pages/showcase/pages/animate-on-scroll/animate-on-scroll.page";
import {InputOtpPage} from "@modules/main/pages/showcase/pages/input-otp/input-otp.page";
import {IranMapPage} from "@modules/main/pages/showcase/pages/iran-map/iran-map.page";

export const COMPONENTS: Type<any>[] = [
  // components
  WelcomeComponent,
  EmojiComponent,
  BlocksComponent,
  SpaceComponent,
  BubblesComponent,
  PreviewOptionsComponent,
  SmokeComponent,
  // pages
  AnimateOnScrollPage,
  AutoCompletePage,
  BottomSheetPage,
  ButtonPage,
  CascadeSelectPage,
  CheckboxPage,
  ChipsPage,
  ColorPickerPage,
  ConfirmDialogPage,
  ConfirmPopupPage,
  DashboardPage,
  DialogPage,
  DialogFormPage,
  DropdownPage,
  DualLabelSwitchPage,
  DynamicDialogSampleComponent,
  EditorPage,
  EmptyPage,
  FilePickerPage,
  FilePicker2Page,
  GregorianDatepickerPage,
  ImagePage,
  ImageSliderPage,
  InfiniteScrollPage,
  InputMaskPage,
  InputNumberPage,
  InputOtpPage,
  InputPasswordPage,
  InputTextPage,
  InputTextareaPage,
  IranMapPage,
  JalaliDatepickerPage,
  KnobPage,
  ListboxPage,
  LoadingContainerPage,
  MapPage,
  MessagePage,
  MultiCheckboxPage,
  MultiSelectPage,
  RadioPage,
  RatingPage,
  SelectButtonPage,
  SliderPage,
  SplitButtonPage,
  StatusPage,
  SwitchPage,
  TablePage,
  ToastPage,
  ToggleButtonPage,
  TreePage,
  TreeSelectPage,
  TriStateCheckboxPage,
  UtilsPage
];
