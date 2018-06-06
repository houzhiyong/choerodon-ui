import * as React from 'react';
import Icon from '../icon';
import Select, { SelectProps } from '../select';
import Pagination from '../pagination';
import Tooltip from '../tooltip';
import classNames from 'classnames';
import omit from 'omit.js';

const Option = Select.Option;

export const icons = {
  default: [
    'sutask', 'baseline-arrow_drop_down', 'baseline-arrow_drop_up', 'baseline-arrow_left', 'baseline-arrow_right',
    'baseline-link_off', 'baseline-drag_indicator', 'baseline-file_copy', 'sms_outline', 'versionline',
    'root', 'micro', 'publish2', 'link2', 'center', 'filter2', 'manage_project', 'manage_person',
    'manage_organization', 'password', 'custom_Directory', 'predefine', 'project', 'return', 'API',
    '／', 'application_model', 'microservice', 'instance', 'instance_outline', 'IAM', 'routeroutline',
    'version', 'devops', 'CI', 'kubernetes', 'branch', 'point', 'wait_circle', 'add_activity',
    'add_task', 'export', 'priority', 'debug', 'cancle_a', 'cancle_b', 'forbidden_a', 'forbidden_b',
    'database', 'Development-monitoring', 'insight', 'jsfiddle', 'Operation-monitoring', 'rocket',
    'wrench', 'finished', 'skipped_a', 'skipped_b', 'wait_five_a', 'wait_five_b', 'wait_four_a',
    'wait_four_b', 'wait_one_a', 'wait_one_b', 'wait_three_a', 'wait_three_b', 'wait_two_a',
    'wait_two_b', 'd_rotation', 'ac_unit', 'alarm', 'access_alarms', 'schedule', 'accessibility',
    'accessible', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'adb',
    'add', 'add_a_photo', 'alarm_add', 'add_alert', 'add_box', 'add_circle', 'control_point', 'add_location',
    'add_shopping_cart', 'queue', 'add_to_queue', 'adjust', 'airline_seat_flat', 'airline_seat_flat_angled',
    'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal',
    'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal',
    'flight', 'airplanemode_inactive', 'airplay', 'airport_shuttle', 'alarm_off', 'alarm_on',
    'album', 'all_inclusive', 'all_out', 'android', 'announcement', 'apps', 'archive', 'arrow_back',
    'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_upward',
    'art_track', 'aspect_ratio', 'poll', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return',
    'assignment_returned', 'assignment_turned_in', 'assistant', 'flag', 'attach_file', 'attach_money', 'attachment',
    'audiotrack', 'autorenew', 'av_timer', 'backspace', 'cloud_upload', 'battery_alert', 'battery_charging_full',
    'battery_std', 'battery_unknown', 'beach_access', 'beenhere', 'block', 'bluetooth', 'bluetooth_searching',
    'bluetooth_connected', 'bluetooth_disabled', 'blur_circular', 'blur_linear', 'blur_off',
    'blur_on', 'class', 'turned_in', 'turned_in_not', 'border_all', 'border_bottom', 'border_clear',
    'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer',
    'border_right', 'border_style', 'border_top', 'border_vertical', 'branding_watermark',
    'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_low',
    'brightness_medium', 'brightness_high', 'brightness_auto', 'broken_image', 'brush',
    'bubble_chart', 'bug_report', 'build', 'burst_mode', 'domain', 'business_center',
    'cached', 'cake', 'phone', 'call_end', 'call_made', 'merge_type', 'call_missed',
    'call_missed_outgoing', 'call_received', 'call_split', 'call_to_action', 'camera',
    'photo_camera', 'camera_enhance', 'camera_front', 'camera_rear', 'camera_roll', 'cancel', 'redeem', 'card_membership', 'card_travel',
    'casino', 'cast', 'cast_connected', 'center_focus_strong', 'center_focus_weak', 'change_history', 'chat', 'chat_bubble',
    'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank', 'check_circle', 'navigate_before', 'navigate_next', 'child_care',
    'child_friendly', 'chrome_reader_mode', 'close', 'clear_all', 'closed_caption', 'wb_cloudy', 'cloud_circle', 'cloud_done',
    'cloud_download', 'cloud_off', 'cloud_queue', 'code', 'photo_library', 'collections_bookmark', 'palette', 'colorize', 'comment',
    'compare', 'compare_arrows', 'laptop', 'confirmation_number', 'contact_mail', 'contact_phone', 'contacts', 'content_copy',
    'content_cut', 'content_paste', 'control_point_duplicate', 'copyright', 'mode_edit', 'create_new_folder', 'payment', 'crop',
    'crop_16_9', 'crop_3_2', 'crop_landscape', 'crop_7_5', 'crop_din', 'crop_free', 'crop_original', 'crop_portrait', 'crop_rotate',
    'crop_square', 'dashboard', 'data_usage', 'date_range', 'dehaze', 'delete', 'delete_forever', 'delete_sweep', 'description',
    'desktop_mac', 'desktop_windows', 'details', 'developer_board', 'developer_mode', 'device_hub', 'phonelink', 'devices_other',
    'dialer_sip', 'dialpad', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway',
    'directions_run', 'directions_transit', 'directions_walk', 'disc_full', 'dns', 'not_interested', 'do_not_disturb_alt',
    'do_not_disturb_off', 'remove_circle', 'dock', 'done', 'done_all', 'donut_large', 'donut_small', 'drafts', 'drag_handle',
    'time_to_leave', 'dvr', 'edit_location', 'eject', 'markunread', 'enhanced_encryption', 'equalizer', 'error', 'error_outline',
    'euro_symbol', 'ev_station', 'insert_invitation', 'event_available', 'event_busy', 'event_note', 'event_seat', 'exit_to_app',
    'expand_less', 'expand_more', 'explicit', 'explore', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1',
    'exposure_plus_2', 'exposure_zero', 'extension', 'face', 'fast_forward', 'fast_rewind', 'favorite', 'favorite_border',
    'featured_play_list', 'featured_video', 'sms_failed', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin',
    'fiber_smart_record', 'get_app', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5',
    'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama',
    'filter_frames', 'terrain', 'filter_list', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'find_in_page', 'find_replace',
    'fingerprint', 'first_page', 'fitness_center', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flight_land', 'flight_takeoff',
    'flip', 'flip_to_back', 'flip_to_front', 'folder', 'folder_open', 'folder_shared', 'folder_special', 'font_download',
    'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear',
    'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic',
    'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote', 'format_shapes', 'format_size',
    'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'question_answer', 'forward',
    'forward_10', 'forward_30', 'forward_5', 'free_breakfast', 'fullscreen', 'fullscreen_exit', 'functions', 'g_translate', 'games', 'gavel',
    'gesture', 'gif', 'goat', 'golf_course', 'my_location', 'location_searching', 'location_disabled', 'star', 'gradient', 'grain',
    'graphic_eq', 'grid_off', 'grid_on', 'people', 'group_add', 'group_work', 'hd', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak',
    'headset', 'headset_mic', 'healing', 'hearing', 'help', 'help_outline', 'high_quality', 'highlight', 'highlight_off', 'restore',
    'home', 'hot_tub', 'local_hotel', 'hourglass_empty', 'hourglass_full', 'http', 'lock', 'photo', 'image_aspect_ratio',
    'import_contacts', 'import_export', 'important_devices', 'inbox', 'indeterminate_check_box', 'info', 'info_outline',
    'input', 'insert_comment', 'insert_drive_file', 'tag_faces', 'link', 'invert_colors', 'invert_colors_off', 'iso', 'keyboard',
    'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace',
    'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'kitchen', 'label',
    'label_outline', 'language', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'last_page', 'open_in_new',
    'layers', 'layers_clear', 'leak_add', 'leak_remove', 'lens', 'library_books', 'library_music', 'lightbulb_outline',
    'line_style', 'line_weight', 'linear_scale', 'linked_camera', 'list', 'live_help', 'live_tv', 'local_play', 'local_airport',
    'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'restaurant_menu', 'local_drink',
    'local_florist', 'local_gas_station', 'shopping_cart', 'local_hospital', 'local_laundry_service', 'local_library', 'local_mall',
    'theaters', 'local_offer', 'local_parking', 'local_pharmacy', 'local_pizza', 'print', 'local_shipping', 'local_taxi', 'location_city',
    'location_off', 'room', 'lock_open', 'lock_outline', 'looks', 'looks_3', 'looks_4', 'looks_5',
    'looks_6', 'looks_one', 'looks_two', 'sync', 'loupe', 'low_priority', 'loyalty', 'mail_outline',
    'map', 'markunread_mailbox', 'memory', 'menu', 'message', 'mic', 'mic_none', 'mic_off', 'mms',
    'mode_comment', 'monetization_on', 'money_off', 'monochrome_photos', 'mood_bad', 'more', 'more_horiz',
    'more_vert', 'motorcycle', 'mouse', 'move_to_inbox', 'movie_creation', 'movie_filter', 'multiline_chart',
    'music_note', 'music_video', 'nature', 'nature_people', 'navigation', 'near_me', 'network_cell',
    'network_check', 'network_locked', 'network_wifi', 'new_releases', 'next_week', 'nfc', 'no_encryption',
    'signal_cellular_no_sim', 'note', 'note_add', 'notifications', 'notifications_active', 'notifications_none',
    'notifications_off', 'notifications_paused', 'offline_pin', 'ondemand_video', 'opacity', 'open_in_browser',
    'open_with', 'pages', 'pageview', 'pan_tool', 'panorama', 'radio_button_unchecked', 'panorama_horizontal',
    'panorama_vertical', 'panorama_wide_angle', 'party_mode', 'pause', 'pause_circle_filled', 'pause_circle_outline',
    'people_outline', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'person_outline',
    'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_add', 'person_pin', 'person_pin_circle', 'personal_video',
    'pets', 'phone_android', 'phone_android2', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_iphone',
    'phone_locked', 'phone_missed', 'phone_paused', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring',
    'phonelink_setup', 'photo_album', 'photo_filter', 'photo_size_select_actual', 'photo_size_select_large',
    'photo_size_select_small', 'picture_as_pdf', 'picture_in_picture', 'picture_in_picture_alt', 'pie_chart',
    'pie_chart_outlined', 'pin_drop', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'play_for_work',
    'playlist_add', 'playlist_add_check', 'playlist_play', 'plus_one', 'polymer', 'pool', 'portable_wifi_off',
    'portrait', 'power', 'power_input', 'power_settings_new', 'pregnant_woman', 'present_to_all', 'priority_high',
    'public', 'publish', 'queue_music', 'queue_play_next', 'radio', 'radio_button_checked', 'rate_review', 'receipt',
    'recent_actors', 'record_voice_over', 'redo', 'refresh', 'remove', 'remove_circle_outline', 'remove_from_queue',
    'visibility', 'remove_shopping_cart', 'reorder', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5',
    'reply', 'reply_all', 'report', 'warning', 'restaurant', 'restore_page', 'ring_volume', 'room_service',
    'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'rounded_corner', 'router', 'rowing', 'rss_feed',
    'rv_hookup', 'satellite', 'save', 'scanner', 'school', 'screen_lock_landscape', 'screen_lock_portrait',
    'screen_lock_rotation', 'screen_rotation', 'screen_share', 'sd_storage', 'search', 'security', 'select_all',
    'send', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_dissatisfied',
    'sentiment_very_satisfied', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth',
    'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_composite',
    'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote',
    'settings_system_daydream', 'settings_voice', 'share', 'shop', 'shop_two', 'shopping_basket', 'short_text',
    'show_chart', 'shuffle', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar',
    'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock',
    'signal_wifi_off', 'sim_card', 'sim_card_alert', 'skip_next', 'skip_previous',
    'slideshow', 'slow_motion_video', 'stay_primary_portrait', 'smoke_free', 'smoking_rooms',
    'textsms', 'snooze', 'sort', 'sort_by_alpha', 'spa', 'space_bar', 'speaker', 'speaker_group',
    'speaker_notes', 'speaker_notes_off', 'speaker_phone', 'spellcheck', 'star_border', 'star_half',
    'stars', 'stay_primary_landscape', 'stop', 'stop_screen_share', 'storage', 'store_mall_directory',
    'straighten', 'streetview', 'strikethrough_s', 'style', 'subdirectory_arrow_left', 'subdirectory_arrow_right',
    'subject', 'subscriptions', 'subtitles', 'subway', 'supervisor_account', 'surround_sound', 'swap_calls',
    'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'switch_camera', 'switch_video', 'sync_disabled', 'sync_problem',
    'system_update', 'system_update_alt', 'tab', 'tab_unselected', 'tablet', 'tablet_android', 'tablet_mac', 'tap_and_play',
    'text_fields', 'text_format', 'texture', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'timelapse',
    'timeline', 'timer', 'timer_10', 'timer_3', 'timer_off', 'title', 'toc', 'today', 'toll', 'tonality',
    'touch_app', 'toys', 'track_changes', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transform',
    'translate', 'trending_down', 'trending_flat', 'trending_up', 'tune', 'tv', 'unarchive', 'undo', 'unfold_less',
    'unfold_more', 'update', 'usb', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top',
    'vibration', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'videogame_asset', 'view_agenda',
    'view_array', 'view_carousel', 'view_column', 'view_comfy', 'view_compact', 'view_day', 'view_headline', 'view_list',
    'view_module', 'view_quilt', 'view_stream', 'view_week', 'vignette', 'visibility_off', 'voice_chat', 'voicemail',
    'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'vpn_key', 'vpn_lock', 'wallpaper', 'watch', 'watch_later',
    'wb_auto', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', 'wc', 'web', 'web_asset', 'weekend', 'whatshot', 'widgets',
    'wifi', 'wifi_lock', 'wifi_tethering', 'work', 'wrap_text', 'youtube_searched_for', 'zoom_in', 'zoom_out', 'zoom_out_map',
  ],
};

export interface IconSelectProps extends SelectProps {
  prefix?: string;
}
export interface IconSelectState {
  current: number,
  total: number,
  pageSize: number,
  filterValue: string,
  data: any,
}
export default class IconSelect extends React.Component<IconSelectProps, IconSelectState> {
  static defaultProps = {
    prefix: 'ant-icon-select',
    filter: true,
    showArrow: false,
    showCheckAll: false,
  };

  rcSelect: React.ReactNode | null;
  constructor(props: IconSelectProps) {
    super(props);
    this.state = {
      current: 1,
      total: 0,
      pageSize: 20,
      filterValue: '',
      data: [],
    };
  }

  componentDidMount() {
    this.initIcon();
  }

  initIcon(current: number = 1, pageSize: number = 20, filterValue: string = '') {
    const minIndex = (current - 1) * pageSize;
    const maxIndex = current * pageSize;
    let items = icons.default;
    if (filterValue) {
      items = icons.default.filter((name) => {
        return name.indexOf(filterValue) !== -1;
      });
    }
    const total = items.length || 0;
    const currentData = items.filter((name, index) => {
      return name && index >= minIndex && index < maxIndex;
    });
    this.setState({
      data: currentData,
      total,
      pageSize,
      current,
      filterValue,
    });
  }

  renderOption() {
    const { data } = this.state;
    return data.map((icon: string) => {
      return (
        <Option key={icon} value={icon}>
          <Tooltip placement="bottomLeft" title={icon}>
            <Icon type={icon} /> {icon}
          </Tooltip>
        </Option>
      );
    });
  }

  handleRender = (label: React.ReactElement<any>) => {
    if (typeof label === 'string' && label) {
      return <span><Icon type={label}/>{label}</span>;
    } else if (typeof label === 'object' && label.props) {
      const { children } = label.props;
      return children ? React.cloneElement(<span/>, {}, children) : null;
    } else {
      return null;
    }
  }

  handlePageChange = (current: number, pageSize: number) => {
    const { filterValue } = this.state;
    this.initIcon(current, pageSize, filterValue);
  }

  handleFilter = (value: string) => {
    this.initIcon(1, 20, value);
  }

  saveRef = (node: React.ReactNode) => {
     if (node) {
       this.rcSelect = node;
     }
  }

  renderFooter() {
    const { total, pageSize, current } = this.state;
    return (
      <Pagination
        total={total}
        onChange={this.handlePageChange}
        pageSizeOptions={['20', '40', '80']}
        pageSize={pageSize}
        onShowSizeChange={this.handlePageChange}
        current={current}
      />
    );
  }
  render() {
    const { className, prefix, dropdownClassName } = this.props;
    const selectCls = classNames(className, {
      [`${prefix}`]: true,
    });
    const dropDownCls = classNames(dropdownClassName, {
      [`${prefix}-dropdown`]: true,
    });
    const selectProps = {
      ...this.props,
      className: selectCls,
      dropdownClassName: dropDownCls,
    }
    const otherProps = omit(selectProps, ['prefix']);
    return (
      <Select
        {...otherProps}
        footer={this.renderFooter()}
        onFilterChange={this.handleFilter}
        filterValue={this.state.filterValue}
        choiceRender={this.handleRender}
        filter
        ref={this.saveRef}
      >
        {this.renderOption()}
      </Select>
    );
  }
}
