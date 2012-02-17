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
      <li class="ui-state-default ui-corner-all jp-play ui-icon ui-icon-play" id="<?php print $player_id; ?>-play" title="<?php print t('play'); ?>"><?php print t('play'); ?></li>
      <li class="ui-state-default ui-corner-all jp-pause ui-icon ui-icon-pause" id="<?php print $player_id; ?>-pause" title="<?php print t('pause'); ?>"><?php print t('pause'); ?></li>
      <li class="ui-state-default ui-corner-all jp-stop ui-icon ui-icon-stop" id="<?php print $player_id; ?>-stop" title="<?php print t('stop'); ?>"><?php print t('stop'); ?></li>
      <li class="ui-state-default ui-corner-all jp-volume-min ui-icon ui-icon-volume-off" id="<?php print $player_id; ?>-volume-min" title="<?php print t('min volume'); ?>"><?php print t('min volume'); ?></li>
      <li class="ui-state-default ui-corner-all jp-volume-max ui-icon ui-icon-volume-on" id="<?php print $player_id; ?>-volume-max" title="<?php print t('max volume'); ?>"><?php print t('max volume'); ?></li>
    </ul>
    <div id="<?php print $player_id; ?>-play-time" class="jp-play-time ui-state-default ui-corner-all"></div>
    <div id="<?php print $player_id; ?>-total-time" class="jp-total-time ui-state-default ui-corner-all"></div>
    <div id="<?php print $player_id; ?>-progress" class="jp-progress" title="<?php print t('progress'); ?>">
      <div id="<?php print $player_id; ?>-load-bar" class="jp-load-bar">
        <div id="<?php print $player_id; ?>-play-bar" class="jp-play-bar"></div>
      </div>
    </div>
  </div>
</div>
