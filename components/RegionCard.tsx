"use client";
import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import type { Region } from "@/lib/types";

interface RegionCardProps {
  region: Region;
  onSelect: (region: Region) => void;
}

const RegionCard: React.FC<RegionCardProps> = ({ region, onSelect }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 hover:border-blue-500/50"
          : "bg-white border-gray-200 hover:border-blue-400"
      }`}
      onClick={() => onSelect(region)}
    >
      {/* Decorative Corner Accent - Different from TrekCard */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-600/20 to-transparent pointer-events-none z-10" />

      {/* Background Image with enhanced overlay */}
      <div className="relative overflow-hidden h-72">
        {/* Gradient overlay on hover - blue theme for regions */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <img
          src={typeof region.image === "string" ? region.image : ""}
          alt={region.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

        {/* Trek Count Badge - Enhanced with icon */}
        <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2.5 rounded-xl shadow-xl border-2 border-white/20 z-20 flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
          <div>
            <div className="text-xl font-bold">{region.trekCount}</div>
            <div className="text-xs uppercase font-semibold opacity-90">
              Treks
            </div>
          </div>
        </div>

        {/* Region Title Overlay - Enhanced */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-2xl times group-hover:text-blue-300 transition-colors duration-300">
            {region.name}
          </h3>
          <div className="flex items-center gap-2 text-blue-300 mb-2">
            <div className="p-1.5 bg-blue-500/20 rounded-lg backdrop-blur-sm">
              <MapPin size={18} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Nepal{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Decorative top border - blue theme */}
        <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        {/* Description */}
        <div
          className={`min-h-[60px] leading-relaxed text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p className="line-clamp-2">{region.description}</p>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent`}
        />

        {/* Popular Treks - Enhanced Design */}
        <div
          className={`p-4 rounded-xl border-2 border-dashed ${
            isDarkMode
              ? "bg-gray-700/30 border-gray-600"
              : "bg-blue-50/50 border-blue-200"
          }`}
        >
          <h4
            className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
              isDarkMode ? "text-blue-400" : "text-blue-700"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            Popular Treks
          </h4>
          <div className="space-y-2">
            {region.popularTreks.slice(0, 2).map((trek, index) => (
              <div
                key={index}
                className={`flex items-center text-sm p-2 rounded-lg transition-colors ${
                  isDarkMode ? "hover:bg-gray-600/50" : "hover:bg-white"
                }`}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                  <span className="text-white text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
                <span
                  className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {trek}
                </span>
              </div>
            ))}
            {region.popularTreks.length > 2 && (
              <div
                className={`text-sm font-semibold ml-9 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                +{region.popularTreks.length - 2} more adventures
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Explore Button with gradient - blue theme for regions */}
        <button className="relative w-full group/btn overflow-hidden flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl mt-2">
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />

          <span className="relative z-10">
            Explore {region.name.split(" ")[0]}
          </span>
          <ArrowRight
            size={20}
            className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default RegionCard;
