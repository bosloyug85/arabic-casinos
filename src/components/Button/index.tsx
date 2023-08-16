//  @var $class string
//  @var $href string
//  @var $buttonText string
//  @var $icon string
//  @var $type string
//  @var $target string
//  @var $dataAttr string
//  @var $name string

/**
 *
 class options: btn--solid, btn--outline, btn--icon
 *
  <?php get_partial('components/button', [
    'class' => 'btn--solid btn--primary',
    'href' => '#',
    'buttonText' => 'CTA Button'
  ]); ?>
 *
 */

// <?php if(isset($href) && $href !== "") { ?>
//   <a class="btn <?= $class ?> <?= isset($icon) ? 'btn--icon' : '' ?>"
//     <?= isset($target) ? 'target="'.$target.'"' : '' ?>
//     <?= isset($name) ? 'aria-label="'.$name.'"' : '' ?>
//     <?= isset($dataAttr) ? $dataAttr : '' ?>
//      href="<?= $href ?>">
//     <span class="btn__text">
//         <?= $buttonText ?>
//       <?php if(isset($icon)) { ?>
//         <span class="btn__icon"><?= get_partial($icon) ?></span>
//       <?php } ?>
//       </span>
//   </a>
// <?php } else { ?>
//   <button type="<?= isset($type) ? $type : 'button' ?>" class="btn
//           <?= $class ?> <?= isset($icon) ? 'btn--icon' : '' ?>"
//     <?= isset($name) ? 'aria-label="'.$name.'"' : '' ?>
//     <?= isset($dataAttr) ? $dataAttr : '' ?>>
//     <span class="btn__text">
//         <?= $buttonText ?>
//       <?php if(isset($icon)) { ?>
//         <span class="btn__icon"><?= get_partial($icon) ?></span>
//       <?php } ?>
//       </span>
//   </button>
// <?php } ?>
