<?php
/**
 * @file
 * Audio Annotate modules jPlayer template
 */

/**
 * Provide the HTML output of the jPlayer audio player.
 */
?>
<div id="<?php print $player_id; ?>" class="jplayer"<?php print $mode == 'single' ? ' rel="' . $item['url'] . '"' : ''; ?>></div>
<div class="jp-<?php print $mode; ?>-player">
  <div class="jp-interface">
    <ul class="jp-controls">
      <li class="aa_player_btn aa_play jp-play" id="<?php print $player_id; ?>-play" title="<?php print t('play'); ?>"><?php print t('play'); ?></li>
      <li class="aa_player_btn aa_pause jp-pause" id="<?php print $player_id; ?>-pause" title="<?php print t('pause'); ?>"><?php print t('pause'); ?></li>
      <li class="aa_player_btn aa_stop jp-stop" id="<?php print $player_id; ?>-stop" title="<?php print t('stop'); ?>"><?php print t('stop'); ?></li>
      <li class="aa_player_btn aa_volume-min jp-volume-min" id="<?php print $player_id; ?>-volume-min" title="<?php print t('min volume'); ?>"><?php print t('min volume'); ?></li>
      <li class="aa_player_btn aa_volume-max jp-volume-max" id="<?php print $player_id; ?>-volume-max" title="<?php print t('max volume'); ?>"><?php print t('max volume'); ?></li>
    </ul>
    <div id="<?php print $player_id; ?>-play-time" class="aa_player_btn aa_play-time jp-play-time"></div>
    <div id="<?php print $player_id; ?>-total-time" class="aa_player_btn aa_total-time jp-total-time"></div>
    <div id="<?php print $player_id; ?>-progress" class="aa_progress jp-progress" title="<?php print t('progress'); ?>">
      <div id="<?php print $player_id; ?>-load-bar" class="aa_load-bar jp-load-bar">
        <div id="<?php print $player_id; ?>-play-bar" class="aa_play-bar jp-play-bar"></div>
      </div>
    </div>
  </div>
</div>
