<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Web Development',
                'description' => 'Custom web applications built with modern technologies. We create responsive, scalable, and user-friendly websites that help your business grow.',
                'icon' => 'fas fa-code',
                'price' => 1500.00,
                'status' => 'active'
            ],
            [
                'title' => 'Mobile App Development',
                'description' => 'Native and cross-platform mobile applications for iOS and Android. We build apps that provide excellent user experience and drive engagement.',
                'icon' => 'fas fa-mobile-alt',
                'price' => 2000.00,
                'status' => 'active'
            ],
            [
                'title' => 'UI/UX Design',
                'description' => 'Beautiful and intuitive user interface design. We focus on creating designs that are not only visually appealing but also functional and user-friendly.',
                'icon' => 'fas fa-palette',
                'price' => 800.00,
                'status' => 'active'
            ],
            [
                'title' => 'Digital Marketing',
                'description' => 'Comprehensive digital marketing strategies to boost your online presence. From SEO to social media marketing, we help you reach your target audience.',
                'icon' => 'fas fa-chart-line',
                'price' => 500.00,
                'status' => 'active'
            ],
            [
                'title' => 'E-commerce Solutions',
                'description' => 'Complete e-commerce platforms that help you sell online. We build secure, scalable, and feature-rich online stores.',
                'icon' => 'fas fa-shopping-cart',
                'price' => 2500.00,
                'status' => 'active'
            ],
            [
                'title' => 'Cloud Services',
                'description' => 'Cloud infrastructure and deployment services. We help you migrate to the cloud and optimize your applications for better performance.',
                'icon' => 'fas fa-cloud',
                'price' => 1200.00,
                'status' => 'active'
            ]
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
