<?php

namespace Drupal\my_demo\Controller;

use Drupal\Core\Controller\ControllerBase;

class MyDemoController extends ControllerBase {

  public function testFrontPage() {
    $markup = '<nav style="margin-bottom: 1rem;">
        <a href="/my-page-one" style="margin-right: 1rem;">Page One (React)</a>
        <a href="/my-page-two">Page Two (HTML)</a>
    </nav>
    <h2>This is the test front page (HTML)</h2>
    <p>This page shows regular HTML content. Click "Page One" to see React + MUI!</p>';
    
    return [
      '#type' => 'markup',
      '#markup' => $markup,
    ];
  }

  public function pageOne() {
    return [
      '#type' => 'markup',
      '#markup' => '<div id="react-root" class="react-container"></div>',
      '#attached' => [
        'library' => [
          'react_theme/react-app',
        ],
      ],
    ];
  }

  public function pageTwo() {
    $markup = '<nav style="margin-bottom: 1rem;">
        <a href="/my-page-one" style="margin-right: 1rem;">Page One (React)</a>
        <a href="/my-page-two">Page Two (HTML)</a>
    </nav>
    <h2>This is the second page (HTML)</h2>
    <p>This page shows regular HTML content. Click "Page One" to see React + MUI!</p>';
    
    return [
      '#type' => 'markup',
      '#markup' => $markup,
    ];
  }

}
