<?php namespace NathanCollins\Projects\Models;

use Model;

/**
 * Model
 */
class Project extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'nathancollins_projects_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    // Relations

    public $attachOne = [
        'thumbnail' => 'System\Models\File'
    ];
}
